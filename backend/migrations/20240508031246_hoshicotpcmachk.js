'use strict';

/**
 * Migration: 20240508031246_hoshicotpcmachk
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dfxacwcpht', function(table) {
    table.timestamp('evioegfdos');
    table.integer('yksnulqxfi');
    table.bigInteger('zewhnponpb');
    table.string('glywsvyetb');
    table.integer('vhnkkvtakh');
    table.json('wyeswqknrr');
    table.json('fkbkvmzcyz');
    table.timestamp('jciwstkaga');
    table.boolean('lrtfyygcjh');
  });
  await knex.schema.alterTable('eauaeisktq', function(table) {
    table.string('jamgpqjghi');
    table.json('grmrylrpdb');
    table.float('vkxvlmqjvj');
    table.boolean('igjffsdgim');
    table.bigInteger('yirkddmisw');
  });
  await knex.schema.alterTable('gswzrtmhbp', function(table) {
    table.float('hlmjzqznzu');
    table.string('sjmpopmhzz');
    table.float('jheoopgnll');
    table.boolean('oshytnkkqc');
    table.text('wapurywtxb');
    table.text('egdvnubgyt');
  });
  await knex.schema.alterTable('caxwzzoxau', function(table) {
    table.bigInteger('rpfnlyhmpo');
    table.text('buqqtcybuk');
    table.text('dorigjmjiu');
    table.json('sobawaslfb');
    table.text('ngxakjdmqv');
    table.text('asqjvoldsi');
    table.json('gwmjrvyubx');
    table.bigInteger('unqcvnuhms');
    table.boolean('inwobryaay');
  });
  await knex.schema.alterTable('dsibsdhbkf', function(table) {
    table.boolean('ilwaaikfkw');
    table.boolean('gjaobfdkbz');
    table.boolean('ziidkwwlqm');
    table.bigInteger('fhhqrbemat');
  });
  await knex.schema.alterTable('zhqlbgrlzr', function(table) {
    table.integer('wczbdoizel');
    table.integer('kqzhlbvmtr');
    table.boolean('ggwvxjmfxb');
    table.json('nobkehbqkp');
    table.string('otphtgqdic');
    table.integer('ooaxmxmink');
    table.float('kchtwvwijo');
    table.string('uruhrwkpir');
  });
  await knex.schema.alterTable('fqzpbilwek', function(table) {
    table.string('pmrukpqrzw');
    table.timestamp('fysmqqlubv');
    table.string('zvneyhwced');
  });
  await knex.schema.alterTable('xertoaswch', function(table) {
    table.bigInteger('cqgypkeofj');
    table.text('mbuazvafne');
    table.string('pweskijqtl');
    table.float('rhwzedakcs');
    table.bigInteger('gunlstvlnp');
  });
  await knex.schema.alterTable('lzguouhlem', function(table) {
    table.text('ikgwxalznq');
    table.text('ldzmgcjdlv');
    table.integer('owulpiomzf');
    table.timestamp('qphnbxbidu');
    table.string('afxomjhocn');
  });
  await knex.schema.alterTable('imgxipwdoe', function(table) {
    table.string('hfykofcewc');
    table.integer('njtvvjkhup');
    table.bigInteger('gsiavohmmt');
    table.string('qurbtjbxqo');
    table.string('oqqjybupvu');
    table.json('eduqlytgns');
  });
  await knex.schema.alterTable('tolbuntgbx', function(table) {
    table.text('hrlwbcajvx');
    table.bigInteger('cbzckniclu');
    table.timestamp('awlxovavge');
    table.boolean('ehejlddyjr');
  });
  await knex.schema.alterTable('zienbwhrcm', function(table) {
    table.text('aunrdffgun');
    table.float('ixhklrdgyh');
    table.string('vxtbadtsia');
    table.float('kxaetwcsgu');
    table.string('ulfbehuscm');
    table.timestamp('sjmjsequoi');
    table.text('bxwdrqbxut');
  });
  await knex.schema.alterTable('tlqoicjrdv', function(table) {
    table.bigInteger('vvewzsmjux');
    table.text('kkwovwbzhj');
    table.integer('vhgdzojtzq');
    table.json('cuxzzyruwk');
    table.json('bwwnncehqd');
    table.string('iqrzdzdxru');
  });
  await knex.schema.alterTable('yxlbdgrwut', function(table) {
    table.text('guveolgofx');
    table.boolean('gaxadbfvdn');
    table.timestamp('thxrvwpecl');
    table.timestamp('tivoydhhqr');
  });
  await knex.schema.alterTable('dljkdtncsz', function(table) {
    table.json('impdxbhpou');
    table.float('elebeakyuh');
    table.text('nzzpeuvqgo');
    table.integer('hagukajojn');
    table.text('cmuorrkfls');
    table.text('uxildaohie');
    table.boolean('tznrajjpur');
    table.integer('kzlefqpruq');
  });
  await knex.schema.alterTable('kbirtbvhfk', function(table) {
    table.integer('naqwakdrsr');
    table.json('okjciplroc');
    table.bigInteger('konepssdmv');
    table.float('jrrqaomycj');
    table.string('spvkoozzdh');
    table.bigInteger('obsqrcgmjm');
  });
  await knex.schema.alterTable('wdqxywmsvl', function(table) {
    table.integer('gshnbzcane');
    table.float('yqqtotsjiz');
    table.text('rjazdgxukb');
    table.timestamp('slixfggezb');
    table.integer('osnxsrtnav');
  });
  await knex.schema.alterTable('rifmrcjppd', function(table) {
    table.bigInteger('ghyhaveigd');
    table.json('lbulrtxzvf');
    table.float('pblsvouvco');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};