'use strict';

/**
 * Migration: 20240611033919_yuvfjgdqxhexvax
 * Description: Drop table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gqwopfostl', function(table) {
    table.bigInteger('yvogklszcc');
    table.string('hobovodlcw');
    table.float('wxhigcyxkm');
    table.integer('yguduwbohz');
    table.bigInteger('bcjnjutxge');
    table.string('yqzkayqeiy');
    table.bigInteger('tntihqturg');
    table.bigInteger('xjszxeomda');
    table.bigInteger('vrveteskxk');
    table.integer('trjwxzvgea');
  });
  await knex.schema.alterTable('nnnzpvqrsq', function(table) {
    table.bigInteger('jdpfbqcmsg');
    table.boolean('iexadxxkhb');
    table.string('bxzbkyyqeg');
    table.integer('nusuzosjbs');
    table.string('bzpymuriqi');
    table.json('kwluyuwwix');
    table.string('mmngedkosm');
    table.string('ghsozcaopi');
    table.timestamp('hbgufrypvs');
    table.bigInteger('otpvbigugr');
  });
  await knex.schema.alterTable('bkuezllmxc', function(table) {
    table.string('uedyibtyut');
    table.integer('ebjcsaerxz');
    table.json('xnqqsorcdz');
    table.timestamp('udtjezhoyw');
    table.string('bpwnpalbbo');
    table.json('xiapnxtqnj');
    table.float('ifrbptliae');
    table.integer('ogczchnins');
    table.string('wkncnxplwt');
    table.json('ntdgrbglqi');
  });
  await knex.schema.alterTable('qhnvgjkisv', function(table) {
    table.bigInteger('tnpgqsuxsi');
    table.string('cxvistbkuu');
    table.json('fftcagvhrr');
    table.text('auljgpnugr');
    table.boolean('xtbhgdtuqm');
    table.integer('qmbtvqyoft');
    table.integer('lulqvjfpwq');
  });
  await knex.schema.alterTable('zvhjiarlrp', function(table) {
    table.text('xxcwawgnln');
    table.timestamp('xncdadxzzz');
    table.text('mmetlbmect');
    table.json('kdsdgoqsxp');
    table.string('robjguwwuk');
    table.float('yauiqjgtlm');
    table.float('isxqqzhhjj');
    table.timestamp('ppzcvejhbs');
    table.text('xdxsylansu');
  });
  await knex.schema.alterTable('pnagvzzpkc', function(table) {
    table.float('iofnzueivb');
    table.string('igtrlcbyhg');
    table.integer('rzsjapsjuz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};