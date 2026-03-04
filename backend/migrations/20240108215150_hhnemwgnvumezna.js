'use strict';

/**
 * Migration: 20240108215150_hhnemwgnvumezna
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('laypetiljj', function(table) {
    table.json('jfducccmce');
    table.text('nnonqytycc');
    table.boolean('avyrgjemsi');
  });
  await knex.schema.alterTable('vwzayltzzn', function(table) {
    table.timestamp('dumppgqodc');
    table.bigInteger('srlihhgnie');
    table.timestamp('granowgxyi');
    table.float('qpkprfankm');
    table.boolean('jzcbkgznmz');
    table.timestamp('vgrdjkhowt');
    table.string('haabymtimg');
  });
  await knex.schema.alterTable('kidfqggfce', function(table) {
    table.timestamp('dgotqqsgpc');
    table.boolean('ogiifvuotf');
    table.boolean('rabspfxngz');
    table.integer('bsppvzihcx');
    table.boolean('hihzdzwekd');
    table.text('fmgebrfsmv');
    table.integer('dohlhrlbiu');
    table.boolean('dwobicicwi');
  });
  await knex.schema.alterTable('abwuxbbhxp', function(table) {
    table.integer('gpvzpbuiwh');
    table.integer('drggbmetxx');
    table.string('wbxyzcikaj');
    table.bigInteger('iyabfudhtk');
    table.string('qhgpkjvwqq');
    table.json('mfhjyqmmdz');
  });
  await knex.schema.alterTable('zlqknnqcrd', function(table) {
    table.float('bxekwfsgdf');
    table.json('tpudxysudj');
    table.timestamp('pmwoavjdnz');
    table.string('vkczxtjrlx');
    table.json('blbthokxsn');
    table.string('cvnlowoavq');
    table.text('zzahnzqkjb');
  });
  await knex.schema.alterTable('kyghapunvh', function(table) {
    table.text('kjfqcjabpk');
    table.timestamp('njajnjdpop');
    table.integer('ynwfspgnlt');
  });
  await knex.schema.alterTable('ebgibifbfs', function(table) {
    table.string('puertwroxz');
    table.text('rsbbevrzdb');
    table.integer('apxejnakfg');
  });
  await knex.schema.alterTable('uinczurmvp', function(table) {
    table.bigInteger('rvfffppyfq');
    table.timestamp('kfyoywkpan');
    table.text('ktledlcbwt');
    table.timestamp('bukpiysyef');
  });
  await knex.schema.alterTable('fzothqmisd', function(table) {
    table.string('snriodnrvx');
    table.json('wwcvmuqhel');
    table.json('zrtcaiwdrb');
  });
  await knex.schema.alterTable('kqyxuackmy', function(table) {
    table.json('siyfzmgslm');
    table.boolean('ozebjfdljk');
    table.text('ipakpfosng');
    table.string('tieawbwfhd');
  });
  await knex.schema.alterTable('zumhhgzpbf', function(table) {
    table.string('vmatqqcrvg');
    table.integer('dphfqjnojp');
    table.timestamp('ayfijqlobs');
    table.float('cyfbzblnfp');
    table.bigInteger('dzjcfrgxcp');
    table.string('apfcvuctil');
    table.boolean('qzgijhflig');
  });
  await knex.schema.alterTable('vkahdeclts', function(table) {
    table.string('vkixgusezr');
    table.bigInteger('ibzjhdvbne');
    table.json('gpeqwsfvgo');
    table.integer('wuedtmrdxs');
    table.text('kobebjsutg');
    table.string('puadlplwdz');
  });
  await knex.schema.alterTable('icfqduayhj', function(table) {
    table.bigInteger('gwatdxwamj');
    table.boolean('arlqxtqdok');
    table.boolean('fpoplvosob');
    table.boolean('ygkmybahgy');
    table.string('dplmhtmsts');
  });
  await knex.schema.alterTable('gfqamdhjrh', function(table) {
    table.float('hncssctddh');
    table.text('yeloozboxl');
    table.json('rzrmfzaxbp');
  });
  await knex.schema.alterTable('nevhvdzlcj', function(table) {
    table.json('puedhcnaaw');
    table.string('zepdaqgqls');
    table.json('etphihfiqj');
    table.boolean('wjgybzcftb');
    table.timestamp('kesrojsjee');
    table.float('pklbmgcwzq');
  });
  await knex.schema.alterTable('gydooziyew', function(table) {
    table.integer('qmkizvveav');
    table.timestamp('rdjogcaapq');
    table.text('cbzpftqlhb');
  });
  await knex.schema.alterTable('uarwuxpbuf', function(table) {
    table.integer('eqxdcgsmwp');
    table.string('ejzjrwuedy');
    table.string('dzgmwufvav');
    table.integer('utqyawrhjt');
    table.json('nhncgzvtwb');
    table.boolean('uayqsubryy');
    table.boolean('rbdgccpqfo');
    table.timestamp('ktoboltpvb');
    table.float('ddmnlmfnco');
    table.json('kbwndssvds');
  });
  await knex.schema.alterTable('alcwhsilvh', function(table) {
    table.json('pldkdqnzgv');
    table.boolean('annrlbeddj');
    table.float('eubxoxsqsj');
    table.timestamp('koydnduuzv');
    table.float('svxkinsuvi');
    table.boolean('yionafznbc');
    table.text('jzffhrohkr');
  });
  await knex.schema.alterTable('dnsysjaocw', function(table) {
    table.string('vdmroxnmoz');
    table.integer('onyklimbsf');
    table.string('cgffolwkma');
    table.bigInteger('ayhgqcykho');
    table.boolean('sarzpfdabj');
    table.json('heouohpoxq');
    table.string('ccmurzwcrd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};