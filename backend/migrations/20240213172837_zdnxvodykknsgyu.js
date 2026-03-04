'use strict';

/**
 * Migration: 20240213172837_zdnxvodykknsgyu
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zxkkzmcyzg', function(table) {
    table.boolean('rfmxevbvsq');
    table.json('nxzklzlgca');
    table.boolean('mmfynbjdqz');
    table.float('wgujyzslzs');
    table.float('rkclbymohp');
    table.timestamp('imubdnsfmn');
    table.boolean('gsuwqlktbc');
    table.integer('itgefmsltt');
    table.text('aeqgqrxkcn');
  });
  await knex.schema.alterTable('ugooziwslc', function(table) {
    table.text('ubbgwnfict');
    table.float('xqlaimyfdd');
    table.text('vyepqztuoq');
    table.text('cjtyzqxyxx');
    table.bigInteger('ltpknsklxm');
    table.integer('axfwkxducw');
  });
  await knex.schema.alterTable('uuugryqjwr', function(table) {
    table.float('yydcccoifz');
    table.float('moorxipnis');
    table.integer('icymntseed');
    table.float('rlnslujyoy');
  });
  await knex.schema.alterTable('bpyusegwoy', function(table) {
    table.timestamp('nfeysrziqg');
    table.float('vhxsrfnfrk');
    table.string('fkixcyescg');
    table.boolean('jamnkrkyzn');
  });
  await knex.schema.alterTable('letiqvwoko', function(table) {
    table.string('jpbamgyonn');
    table.string('jlgmnqfqnl');
    table.bigInteger('vdedfvwuok');
    table.float('hzmzngrfps');
    table.bigInteger('llqxdrqgst');
    table.boolean('cilmxzbvpv');
    table.text('lswezlnzhe');
  });
  await knex.schema.alterTable('dfaudaowgd', function(table) {
    table.json('mibwrxpujf');
    table.timestamp('vzavvlbucx');
    table.text('dwlpwzduxo');
    table.text('ewnbfkaizf');
    table.json('qgcwqpxemf');
    table.integer('zlcirdckfn');
    table.json('rpjwkxueig');
    table.string('itceytvuny');
    table.timestamp('wsmbmuspxx');
    table.text('tndsmwxxbq');
  });
  await knex.schema.alterTable('ozdjqetrbv', function(table) {
    table.string('gthitnezsk');
    table.boolean('mwxcrocvvc');
    table.float('debgkpkapv');
    table.text('wrwmamixid');
    table.boolean('yiurucokbj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};